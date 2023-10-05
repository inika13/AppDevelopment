package com.example.demo.Service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.PayEntity;
import com.example.demo.Repository.PayRepository;

@Service
public class PayService implements PayInt 
{
   
    @Autowired
    private PayRepository payrepository;
	@Override
	public List<PayEntity> getDetails() {
		
		return payrepository.findAll();
	}

    @Override
    public void savePay(PayEntity payentity) 
    {
    	payrepository.save(payentity);
	
    }

   @Override
   public void updatePay(PayEntity payentity) 
   {
	   payrepository.save(payentity);
	
   }

   @Override
   public void deletePay(String firstname) 
   {
	   payrepository.deleteByFirstname(firstname);
   }

@Override
public List<PayEntity> getAll(String firstname, String lastname) {
	// TODO Auto-generated method stub
	return null;
}

@Override
public void saveSignup(PayEntity payentity) {
	// TODO Auto-generated method stub
	
}

@Override
public void updateSignup(PayEntity payentity) {
	// TODO Auto-generated method stub
	
}

@Override
public void deleteSignup(String firstname) {
	// TODO Auto-generated method stub
	
}




}