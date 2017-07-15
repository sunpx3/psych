/*
 *  Copyright 2010 The MyBatis Team
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.zg.core.generator.codegen.mybatis3.javamapper.elements.sqlprovider;

import static com.zg.core.generator.codegen.mybatis3.MyBatis3FormattingUtilities.getEscapedColumnName;
import static com.zg.core.generator.codegen.mybatis3.MyBatis3FormattingUtilities.getParameterClause;
import static com.zg.core.generator.internal.util.JavaBeansUtil.getGetterMethodName;
import static com.zg.core.generator.internal.util.StringUtility.escapeStringForJava;

import java.util.Set;
import java.util.TreeSet;

import com.zg.core.generator.api.IntrospectedColumn;
import com.zg.core.generator.api.dom.java.FullyQualifiedJavaType;
import com.zg.core.generator.api.dom.java.JavaVisibility;
import com.zg.core.generator.api.dom.java.Method;
import com.zg.core.generator.api.dom.java.Parameter;
import com.zg.core.generator.api.dom.java.TopLevelClass;

/**
 * 
 * @author Jeff Butler
 * 
 */
public class ProviderUpdateByPrimaryKeySelectiveMethodGenerator extends
        AbstractJavaProviderMethodGenerator {

    public ProviderUpdateByPrimaryKeySelectiveMethodGenerator() {
        super();
    }

    @Override
    public void addClassElements(TopLevelClass topLevelClass) {
        Set<String> staticImports = new TreeSet<String>();
        Set<FullyQualifiedJavaType> importedTypes = new TreeSet<FullyQualifiedJavaType>();

        staticImports.add("org.apache.ibatis.jdbc.SqlBuilder.BEGIN"); //$NON-NLS-1$
        staticImports.add("org.apache.ibatis.jdbc.SqlBuilder.UPDATE"); //$NON-NLS-1$
        staticImports.add("org.apache.ibatis.jdbc.SqlBuilder.SET"); //$NON-NLS-1$
        staticImports.add("org.apache.ibatis.jdbc.SqlBuilder.SQL"); //$NON-NLS-1$
        staticImports.add("org.apache.ibatis.jdbc.SqlBuilder.WHERE"); //$NON-NLS-1$

        FullyQualifiedJavaType fqjt = introspectedTable.getRules().calculateAllFieldsClass();
        importedTypes.add(fqjt);
        
        Method method = new Method(introspectedTable.getUpdateByPrimaryKeySelectiveStatementId());
        method.setReturnType(FullyQualifiedJavaType.getStringInstance());
        method.setVisibility(JavaVisibility.PUBLIC);
        method.addParameter(new Parameter(fqjt, "record")); //$NON-NLS-1$
        
        context.getCommentGenerator().addGeneralMethodComment(method,
                introspectedTable);

        method.addBodyLine("BEGIN();"); //$NON-NLS-1$
        
        method.addBodyLine(String.format("UPDATE(\"%s\");", //$NON-NLS-1$
                escapeStringForJava(introspectedTable.getFullyQualifiedTableNameAtRuntime())));
        method.addBodyLine(""); //$NON-NLS-1$
        
        for (IntrospectedColumn introspectedColumn : introspectedTable.getNonPrimaryKeyColumns()) {
            if (!introspectedColumn.getFullyQualifiedJavaType().isPrimitive()) {
                method.addBodyLine(String.format("if (record.%s() != null) {", //$NON-NLS-1$
                    getGetterMethodName(introspectedColumn.getJavaProperty(),
                            introspectedColumn.getFullyQualifiedJavaType())));
            }

            method.addBodyLine(String.format("SET(\"%s = %s\");", //$NON-NLS-1$
                    escapeStringForJava(getEscapedColumnName(introspectedColumn)),
                    getParameterClause(introspectedColumn)));
                
            if (!introspectedColumn.getFullyQualifiedJavaType().isPrimitive()) {
                method.addBodyLine("}"); //$NON-NLS-1$
            }

            method.addBodyLine(""); //$NON-NLS-1$
        }

        for (IntrospectedColumn introspectedColumn : introspectedTable.getPrimaryKeyColumns()) {
            method.addBodyLine(String.format("WHERE(\"%s = %s\");", //$NON-NLS-1$
                    escapeStringForJava(getEscapedColumnName(introspectedColumn)),
                    getParameterClause(introspectedColumn)));
        }
        
        method.addBodyLine(""); //$NON-NLS-1$
        method.addBodyLine("return SQL();"); //$NON-NLS-1$

        if (context.getPlugins().providerUpdateByPrimaryKeySelectiveMethodGenerated(method, topLevelClass,
                introspectedTable)) {
            topLevelClass.addStaticImports(staticImports);
            topLevelClass.addImportedTypes(importedTypes);
            topLevelClass.addMethod(method);
        }
    }
}
