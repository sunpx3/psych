package com.zg.core.controller;

import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.MultipartRequest;
import org.springframework.web.servlet.ModelAndView;

/**
 * 文件上传
 * @author sunpx
 *
 */
@Controller
@RequestMapping("/fileupload")
public class FileUploadController {

	@RequestMapping(params = "uploadFile")
	public ModelAndView fileUploadIndex(){
		
		return new ModelAndView("admin/fileupload");
	}
	
	@RequestMapping(params = "uploadFiles")
	public ModelAndView uploadFiles(MultipartRequest  multipartRequest ,
			HttpServletRequest request) {
		
		//获取多个file  
		for (Iterator it = multipartRequest.getFileNames(); it.hasNext();) {  
		    MultipartFile imgFile = multipartRequest.getFile(it.next().toString());  
		    if (imgFile.getOriginalFilename().length() > 0) {  
		        String fileName = imgFile.getOriginalFilename();  
		        System.out.println(fileName);
		    }  
		}  
		
		return new ModelAndView("admin/fileupload");
		
	}
}
