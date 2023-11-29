package lk.ijse.tutionclass.myPack.advisor;

import lk.ijse.tutionclass.myPack.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@CrossOrigin
public class AppWideExceptionHandler {
    @ExceptionHandler({RuntimeException.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseUtil handleException(RuntimeException e) {
        System.out.println("Awaaaaaa");
        return new ResponseUtil("Error","Username Already exists","");
    }

    @ExceptionHandler({Exception.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseUtil handleExceptionDuplicate(RuntimeException e) {
        System.out.println("awaaaa");
        return new ResponseUtil("Error", "Username Already exists", "");
    }
}
