package com.zg.core.util;

import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;

/**
 * 视图工具类
 * @author sunpx
 *
 */
public class ViewUtil {

	public static ModelAndView redirectUrl(String url) {
		
		return new ModelAndView("redirect:" + url);
	}
	
	public static ModelAndView forwardUrl(String url) {
		
		return new ModelAndView(url);
	}
	
	public static ModelAndView forwardUrl(String url,ModelMap map) {
		
		return new ModelAndView(url , map);
	}
}
