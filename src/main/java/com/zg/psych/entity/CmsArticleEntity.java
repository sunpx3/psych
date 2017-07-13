package com.zg.psych.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 描述：</b>CmsArticle:<br>
 * 实体定义规则
 * 字段不允许存在基本类型，必须都是包装类型(因为基本类型有默认值)
 * 基本数据类型  包装类 byte Byte boolean Boolean short Short char Character int Integer long Long float Float double  Double 
 * @author p3.jeecg
 * @since：2016年06月13日 15时00分30秒 星期一 
 * @version:1.0
 */
public class CmsArticleEntity implements Serializable{
	private static final long serialVersionUID = 1L;
		/**	 *id	 */	private String id;	/**	 *标题	 */	private String title;	/**	 *图片地址	 */	private String imageHref;	/**	 *summary	 */	private String summary;	/**	 *内容	 */	private String content;	/**	 *栏目id	 */	private String columnId;	/**	 *创建人	 */	private String createName;	/**	 *创建人id	 */	private String createBy;	/**	 *创建日期	 */	private Date createDate;	/**	 *publish	 */	private String publish;	/**	 *PUBLISH_DATE	 */	private Date publishDate;	/**	 *AUTHOR	 */	private String author;
	private String label;	/**	 *LABEL	 */
	private String columnName; //栏目菜单名称
	private String authFlag; //空为不需要审核 0 待审核 1审核通过 2审核不通过
	private String authMsg;
	private String discussFlag;//是否评论
	private String autherId; //指定审核userId
	private String updateName;
	private String updateBy;
	private Date updateDate;
	
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public Date getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	public String getAuthMsg() {
		return authMsg;
	}
	public void setAuthMsg(String authMsg) {
		this.authMsg = authMsg;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImageHref() {
		return imageHref;
	}
	public void setImageHref(String imageHref) {
		this.imageHref = imageHref;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getColumnId() {
		return columnId;
	}
	public void setColumnId(String columnId) {
		this.columnId = columnId;
	}
	public String getCreateName() {
		return createName;
	}
	public void setCreateName(String createName) {
		this.createName = createName;
	}
	public String getCreateBy() {
		return createBy;
	}
	public void setCreateBy(String createBy) {
		this.createBy = createBy;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public String getPublish() {
		return publish;
	}
	public void setPublish(String publish) {
		this.publish = publish;
	}
	public Date getPublishDate() {
		return publishDate;
	}
	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getColumnName() {
		return columnName;
	}
	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}
	public String getAuthFlag() {
		return authFlag;
	}
	public void setAuthFlag(String authFlag) {
		this.authFlag = authFlag;
	}
	public String getDiscussFlag() {
		return discussFlag;
	}
	public void setDiscussFlag(String discussFlag) {
		this.discussFlag = discussFlag;
	}
	public String getAutherId() {
		return autherId;
	}
	public void setAutherId(String autherId) {
		this.autherId = autherId;
	}
	public String getUpdateName() {
		return updateName;
	}
	public void setUpdateName(String updateName) {
		this.updateName = updateName;
	}
	public String getUpdateBy() {
		return updateBy;
	}
	public void setUpdateBy(String updateBy) {
		this.updateBy = updateBy;
	}
	}

