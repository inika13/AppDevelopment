package com.example.demo.Service;



import java.util.List;


import com.example.demo.Entity.PayEntity;

public interface PayInt 
{
   public List<PayEntity>getDetails();
   public List<PayEntity> getAll(String firstname,String lastname);
   public void saveSignup(PayEntity payentity);
   public void updateSignup(PayEntity payentity);
   public void deleteSignup(String firstname);
void savePay(PayEntity payentity);
void updatePay(PayEntity payentity);
void deletePay(String username);
   
}

