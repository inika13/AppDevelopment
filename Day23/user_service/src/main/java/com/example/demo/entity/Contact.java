package com.example.demo.entity;


public class Contact {

    private Long contactNumber;
    private String email;
    private String contactName;
    private Long userId;

    public Contact(Long contactNumber, String email, String contactName, Long userId) {
        this.contactNumber = contactNumber;
        this.email = email;
        this.contactName = contactName;
        this.userId = userId;
    }

    public Contact() {


    }

    public Long getcontactNumber() {
        return contactNumber;
    }

    public void setcontactNumber(Long contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}