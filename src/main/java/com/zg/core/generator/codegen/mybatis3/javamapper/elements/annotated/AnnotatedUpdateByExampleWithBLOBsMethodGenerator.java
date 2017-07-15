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
package com.zg.core.generator.codegen.mybatis3.javamapper.elements.annotated;

import com.zg.core.generator.api.dom.java.FullyQualifiedJavaType;
import com.zg.core.generator.api.dom.java.Interface;
import com.zg.core.generator.api.dom.java.Method;
import com.zg.core.generator.codegen.mybatis3.javamapper.elements.UpdateByExampleWithBLOBsMethodGenerator;

/**
 * 
 * @author Jeff Butler
 */
public class AnnotatedUpdateByExampleWithBLOBsMethodGenerator extends
    UpdateByExampleWithBLOBsMethodGenerator {

    public AnnotatedUpdateByExampleWithBLOBsMethodGenerator() {
        super();
    }

    @Override
    public void addMapperAnnotations(Interface interfaze, Method method) {
        FullyQualifiedJavaType fqjt = new FullyQualifiedJavaType(introspectedTable.getMyBatis3SqlProviderType());
        interfaze.addImportedType(new FullyQualifiedJavaType("org.apache.ibatis.annotations.UpdateProvider")); //$NON-NLS-1$
        StringBuilder sb = new StringBuilder();
        sb.append("@UpdateProvider(type="); //$NON-NLS-1$
        sb.append(fqjt.getShortName());
        sb.append(".class, method=\""); //$NON-NLS-1$
        sb.append(introspectedTable.getUpdateByExampleWithBLOBsStatementId());
        sb.append("\")"); //$NON-NLS-1$
        
        method.addAnnotation(sb.toString());
    }
}