/*
 * Copyright (c) 2017 <l_iupeiyu@qq.com> All rights reserved.
 */

package com.zg.core.util;

import org.apache.commons.lang3.StringUtils;
import org.springframework.ui.ModelMap;

/**
 * JSON统一返回数据格式
 * 2017年7月22日19:50:17
 */
public class ReturnUtil {

    public static ModelMap Success(String msg, Object obj, String referer) {
        msg = StringUtils.isEmpty(msg) || StringUtils.isBlank(msg) ? "操作成功" : msg;
        ModelMap mp = new ModelMap();
        mp.put("status", 1);
        mp.put("state", "success");
        mp.put("msg", msg);
        mp.put("referer", referer);
        mp.put("result", obj);
        return mp;
    }

    public static ModelMap Error(String msg, Object obj, String referer) {
        msg = StringUtils.isEmpty(msg) || StringUtils.isBlank(msg) ? "操作失败" : msg;
        ModelMap mp = new ModelMap();
        mp.put("status", 0);
        mp.put("state", "error"); 
        mp.put("msg", msg);
        mp.put("referer", referer);
        mp.put("result", obj);
        return mp;
    }
    
    public static ModelMap Error(String msg) {
        msg = StringUtils.isEmpty(msg) || StringUtils.isBlank(msg) ? "操作失败" : msg;
        ModelMap mp = new ModelMap();
        mp.put("status", 0);
        mp.put("state", "error"); 
        mp.put("msg", msg);
        return mp;
    }
}
