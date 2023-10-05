package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.LoginEntity;

public interface LoginInt {
	public List<LoginEntity> getLogin();

	public List<LoginEntity> getAll(String username);

	public void saveLogin(LoginEntity loginentity);

	public void updateLogin(LoginEntity loginentity);

	public void deleteLogin(String username);
}