/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

/**
 *
 * @author Thanh Duong
 */
public class Certificate {
    private int userID;
    private int courseID;
    private String certificateURL;

    public Certificate() {
    }

    public Certificate(int userID, int courseID, String certificateURL) {
        this.userID = userID;
        this.courseID = courseID;
        this.certificateURL = certificateURL;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getCourseID() {
        return courseID;
    }

    public void setCourseID(int courseID) {
        this.courseID = courseID;
    }

    public String getCertificateURL() {
        return certificateURL;
    }

    public void setCertificateURL(String certificateURL) {
        this.certificateURL = certificateURL;
    }
    
    
}
