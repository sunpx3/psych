package com.zg.core.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class PsyUserRoleEntity implements Serializable {
    @Id
    @Column(name = "uid")
    @GeneratedValue(generator = "UUID")
    private String uid;

    private String psyUserUid;

    private String psyRoleUid;

    private Date createTime;

    private Date updateTime;

    private String remark;

    private static final long serialVersionUID = 1L;

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid == null ? null : uid.trim();
    }

    public String getPsyUserUid() {
        return psyUserUid;
    }

    public void setPsyUserUid(String psyUserUid) {
        this.psyUserUid = psyUserUid == null ? null : psyUserUid.trim();
    }

    public String getPsyRoleUid() {
        return psyRoleUid;
    }

    public void setPsyRoleUid(String psyRoleUid) {
        this.psyRoleUid = psyRoleUid == null ? null : psyRoleUid.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", uid=").append(uid);
        sb.append(", psyUserUid=").append(psyUserUid);
        sb.append(", psyRoleUid=").append(psyRoleUid);
        sb.append(", createTime=").append(createTime);
        sb.append(", updateTime=").append(updateTime);
        sb.append(", remark=").append(remark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}