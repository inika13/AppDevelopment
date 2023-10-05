package com.example.demo.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.PayEntity;

import com.example.demo.Service.PayService;

@CrossOrigin("*")
@RestController
public class PayController 
{
	@Autowired
    private PayService payservice;
    @GetMapping("/payget")
    public List<PayEntity>getPay()
    {
    	return payservice.getDetails();
    }
    
    @GetMapping("/payget1")
	public List<PayEntity> getAllDetails(@RequestParam String firstname,@RequestParam String lastname)
	{
		return payservice.getAll(firstname,lastname);
	}
    
    @PostMapping("/paypost")
    public void saveDetails(@RequestBody PayEntity payentity)
    {
    	payservice.savePay(payentity);
    }
    
    @PutMapping("/payput")
    public void updateDetails(@RequestBody PayEntity payentity,@RequestParam String firstname)
    {
    	payentity.setFirstname(firstname);
    	payservice.updatePay(payentity);
    }
    
  @DeleteMapping("/paydelete")
  public void deleteDetails(@RequestParam String firstname)
  {
	  payservice.deletePay(firstname);
  }
}