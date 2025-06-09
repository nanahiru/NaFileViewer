package org.nanahiru.nafileviewer.core;

public interface UserService {

    String authorization(String username, String password);

    boolean authenticate(String token, String username);

}