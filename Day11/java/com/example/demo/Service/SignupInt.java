package com.example.demo.Service;


import java.util.List;


import com.example.demo.Entity.SignupEntity;

public interface SignupInt 
{
   public List<SignupEntity>getDetails();
   public List<SignupEntity> getAll(String username,String email);
   public void saveSignup(SignupEntity signupentity);
   public void updateSignup(SignupEntity signupentity);
   public void deleteSignup(String username);
}
