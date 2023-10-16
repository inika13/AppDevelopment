package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Contact;

@Service
public class ContactServiceImpl implements ContactService {

	// fake list of contacts

	List<Contact> list = List.of(new Contact(9087170230L, "indhu@gmail.com","indhu", 1311L),
			new Contact(7765456787L, "monisha@gmail.com", "monisha", 1312L), 
			new Contact(8870553590L, "rithika@gmail.com", "rithika", 1313L),
			new Contact(9361656662L, "inika7113@gmail.com", "inika", 1314L));

	@Override
	public List<Contact> getContactsOfUser(Long userId) {
		return list.stream().filter(contact -> contact.getUserId().equals(userId)).collect(Collectors.toList());
	}
}
