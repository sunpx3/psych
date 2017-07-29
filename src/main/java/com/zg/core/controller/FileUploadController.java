package com.zg.core.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
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

	@RequestMapping(params = "uploadFiles")
	public ModelAndView uploadFiles(MultipartRequest multipartRequest, HttpServletRequest request) {

		try {
			// 获取多个file
			for (Iterator it = multipartRequest.getFileNames(); it.hasNext();) {
				MultipartFile imgFile = multipartRequest.getFile(it.next().toString());
				if (imgFile.getOriginalFilename().length() > 0) {
					String fileName = imgFile.getOriginalFilename();
					// System.out.println(fileName);
					FileOutputStream os = new FileOutputStream(new File(uploadPath + fileName));
					BufferedOutputStream buffStream = new BufferedOutputStream(os);
					buffStream.write(imgFile.getBytes());
					buffStream.close();
					os.close();
					System.out.println("文件" + fileName + "上传成功！");
				}
			}
		} catch (IOException e) {
		} catch (Exception e) {
		}

		return new ModelAndView("admin/fileupload");

	}
}
