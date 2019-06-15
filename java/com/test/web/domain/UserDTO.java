package com.test.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * UserDTO
 */
@Data @Component @Lazy
public class UserDTO {
    private String userId;
    private String password;
    private String name;
    private String age;
    private String addr;
    private String profilePhoto;
    
}