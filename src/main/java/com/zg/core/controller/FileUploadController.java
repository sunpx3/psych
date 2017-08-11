package com.zg.core.controller;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;

import javax.servlet.http.HttpServletRequest;

import com.zg.core.util.ReturnUtil;
import org.apache.commons.lang3.time.DateUtils;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.MultipartRequest;
import org.springframework.web.servlet.ModelAndView;

/**
 * 文件上传
 * 
 * @author sunpx
 *
 */
@Controller
@RequestMapping("/fileupload")
public class FileUploadController {

	/**
	 * 使用value注解可以读取application.properties文件内容。
	 */
	@Value("${web.upload-path}")
	private String uploadPath;

	@RequestMapping(params = "uploadFile")
	public ModelAndView fileUploadIndex() {

		return new ModelAndView("admin/fileupload");
	}

	/**
	 * 将分片文件写入本地
	 * @param
	 * @param request
	 * @return
	 */
	@RequestMapping(params = "uploadFiles")
	public ModelAndView uploadFiles(MultipartFile file, HttpServletRequest request) {


		String absolutePath = getAbsolutePath(request);
		String guid = request.getParameter("guid");
		String tempFilePath = absolutePath + "/" + guid;
		createDir(tempFilePath);

		try {

			boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			if(isMultipart){

				int chunk = Integer.valueOf(request.getParameter("chunk"));
				String fileName =  absolutePath + "/" + chunk +"/"+  UUID.randomUUID().toString().replace("-","") + ".mp4";
				File f = new File(fileName);

				FileOutputStream os = new FileOutputStream(f);
				wirteFile(file, os);
				os.close();

			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return new ModelAndView("admin/fileupload");
	}

	/**
	 * 写入文件到本地
	 * @param file
	 * @param os
	 */
	public void wirteFile( MultipartFile file , FileOutputStream os) {

		try {
			FileInputStream in = (FileInputStream) file.getInputStream();
			byte[] buff = new byte[2048];
			while((in.read(buff) != -1)){
				os.write(buff);
			}
			in.close();

		} catch (Exception e){
			e.printStackTrace();
		}

	}

	/**
	 * 合并文件
	 * @return
	 */
	@RequestMapping(params="mergeFiles")
	public ModelMap mergeFiles(HttpServletRequest request){

		String absolutePath = getAbsolutePath(request);
		String guid = request.getParameter("guid");
		String tempFilePath = absolutePath + "/" + guid;

		//获取临时文件集合
		File tFile = new File(tempFilePath);
		File[] files = tFile.listFiles();

		List<File> fileList = Arrays.asList(files);

		Collections.sort(fileList, new Comparator<File>() {
			@Override
			public int compare(File o1, File o2) {

				String name1 = o1.getName();
				String name2 = o1.getName();
				System.out.println(name1 + "|" + name2);
				return 0;
			}
		});

		//根据文件名排序

		return ReturnUtil.Error("合并失败!");
	}


	/**
	 * 获取上传目录绝对路径
	 * @return
	 */
	public String getAbsolutePath(HttpServletRequest request) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String uploadPath = request.getServletContext().getRealPath("/upload");
		String absoluatePath = uploadPath + "/" + df.format(new Date());
		createDir(absoluatePath);
		return absoluatePath;
	}


	/**
	 * 根据传入路径创建文件或文件夹
	 * @param path
	 */
	public void createDir(String path){

		File file = new File(path);
		if(!file.exists()){
			file.mkdir();
		}
	}
}
