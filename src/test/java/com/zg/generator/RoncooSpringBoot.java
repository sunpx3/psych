package com.zg.generator;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.zg.core.generator.api.MyBatisGenerator;
import com.zg.core.generator.config.Configuration;
import com.zg.core.generator.config.xml.ConfigurationParser;
import com.zg.core.generator.exception.InvalidConfigurationException;
import com.zg.core.generator.exception.XMLParserException;
import com.zg.core.generator.internal.DefaultShellCallback;

/**
 * 龙果教程-Spring Boot全集
 * 
 * @author wujing
 */
public class RoncooSpringBoot {
	private static Logger logger = Logger.getLogger(RoncooSpringBoot.class);

	public static void main(String[] args) throws IOException, XMLParserException, InvalidConfigurationException, SQLException, InterruptedException {
		logger.info("Start generator ...");
		List<String> warnings = new ArrayList<String>();
		boolean overwrite = true; // 是否覆盖原来的文件
		File configFile = new File("H:/spring-boot-list/psych/src/test/resources/psych-spring-boot.xml");
		ConfigurationParser cp = new ConfigurationParser(warnings);
		Configuration config = cp.parseConfiguration(configFile);
		DefaultShellCallback callback = new DefaultShellCallback(overwrite);
		MyBatisGenerator myBatisGenerator = new MyBatisGenerator(config, callback, warnings);
		myBatisGenerator.generate(null);
		logger.info("Finish generator");
	}
}
