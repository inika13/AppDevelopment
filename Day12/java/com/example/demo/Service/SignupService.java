package com.example.demo.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.SignupEntity;
import com.example.demo.Repository.SignupRepository;

@Service
public  class SignupService implements SignupInt 
{
   
    @Autowired
    private SignupRepository signuprepository;
	@Override
	public List<SignupEntity> getDetails() {
		
		return signuprepository.findAll();
	}

    @Override
    public void saveSignup(SignupEntity signupentity) 
    {
    	signuprepository.save(signupentity);
	
    }

   @Override
   public void updateSignup(SignupEntity signupentity) 
   {
	   signuprepository.save(signupentity);
	
   }

   @Override
   public void deleteSignup(String username) 
   {
	   signuprepository.deleteByUsername(username);
   }

@Override
public List<SignupEntity> getAll(String username, String email) {
	
	return signuprepository.getAll(username, email);
}



}