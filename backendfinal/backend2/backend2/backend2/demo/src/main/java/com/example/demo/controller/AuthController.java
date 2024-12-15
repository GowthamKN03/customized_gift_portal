// package com.example.demo.controller;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import com.example.demo.model.RefreshToken;
// import com.example.demo.model.User;
// import com.example.demo.service.AuthService;
// import com.example.demo.service.JwtService;
// import com.example.demo.service.RefreshTokenService;
// import com.example.demo.utils.AuthResponse;
// import com.example.demo.utils.LoginRequest;
// import com.example.demo.utils.RefreshTokenRequest;
// import com.example.demo.utils.RegisterRequest;
// @RestController
// @RequestMapping("/api/users")
// @CrossOrigin(origins = "http://localhost:3000") 
// public class AuthController {

//     private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

//     private final AuthService authService;
//     private final RefreshTokenService refreshTokenService;
//     private final JwtService jwtService;
//     public AuthController(AuthService authService, RefreshTokenService refreshTokenService, JwtService jwtService) {
//         this.authService = authService;
//         this.refreshTokenService = refreshTokenService;
//         this.jwtService = jwtService;
//     }

//     @PostMapping("/register")
//     public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
//         logger.info("registered and token created");
//         return ResponseEntity.ok(authService.register(registerRequest));
//     }

//     @PostMapping("/login")
//     public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
//         logger.info("checking credentials and logging in");
//         return ResponseEntity.ok(authService.login(loginRequest));
//     }

//     @PostMapping("/refresh")
//     public ResponseEntity<AuthResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
//         RefreshToken refreshToken = refreshTokenService.verifyRefreshToken(refreshTokenRequest.getRefreshToken());
//         User user = refreshToken.getUser();

//         String accessToken = jwtService.generateToken(user);

//         logger.info("refresh token created");

//         return ResponseEntity.ok(AuthResponse.builder()
//                 .accessToken(accessToken)
//                 .refreshToken(refreshToken.getRefreshToken())
//                 .build());
//     }
// }

package com.example.demo.controller;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.RefreshToken;
import com.example.demo.model.User;
import com.example.demo.service.AuthService;
import com.example.demo.service.JwtService;
import com.example.demo.service.RefreshTokenService;
import com.example.demo.utils.AuthResponse;
import com.example.demo.utils.LoginRequest;
import com.example.demo.utils.RefreshTokenRequest;
import com.example.demo.utils.RegisterRequest;
// @RestController
// @RequestMapping("/api/users")
// @CrossOrigin(origins = "http://localhost:3000") 
// public class AuthController {
//     private final AuthService authService;
//     private final RefreshTokenService refreshTokenService;
//     private final JwtService jwtService;
//     public AuthController(AuthService authService, RefreshTokenService refreshTokenService, JwtService jwtService) {
//         this.authService = authService;
//         this.refreshTokenService = refreshTokenService;
//         this.jwtService = jwtService;
//     }

//     @PostMapping("/register")
//     public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
//         return ResponseEntity.ok(authService.register(registerRequest));
//     }

//     @PostMapping("/login")
//     public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
//         return ResponseEntity.ok(authService.login(loginRequest));
//     }

//     @PostMapping("/refresh")
//     public ResponseEntity<AuthResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
//         RefreshToken refreshToken = refreshTokenService.verifyRefreshToken(refreshTokenRequest.getRefreshToken());
//         User user = refreshToken.getUser();

//         String accessToken = jwtService.generateToken(user);

//         return ResponseEntity.ok(AuthResponse.builder()
//                 .accessToken(accessToken)
//                 .refreshToken(refreshToken.getRefreshToken())
//                 .build());
//     }
// }

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.model.RefreshToken;
// import com.example.demo.service.AuthService;
// import com.example.demo.service.JwtService;
// import com.example.demo.service.RefreshTokenService;
// import com.example.demo.utils.AuthResponse;
// import com.example.demo.utils.LoginRequest;
// import com.example.demo.utils.RefreshTokenRequest;
// import com.example.demo.utils.RegisterRequest;

// import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") 
public class AuthController {
    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;

    public AuthController(AuthService authService, RefreshTokenService refreshTokenService, JwtService jwtService) {
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(authService.register(registerRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
        RefreshToken refreshToken = refreshTokenService.verifyRefreshToken(refreshTokenRequest.getRefreshToken());
        User user = refreshToken.getUser();

        String accessToken = jwtService.generateToken(user);

        return ResponseEntity.ok(AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build());
    }

    @GetMapping("/details/{userId}")
    public ResponseEntity<User> getUserDetails(@PathVariable Long userId) {
        User user = authService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = authService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        authService.deleteUserById(id);
        return ResponseEntity.noContent().build();
    }

  
}