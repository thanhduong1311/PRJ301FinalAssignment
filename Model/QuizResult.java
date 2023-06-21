/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

import java.util.Date;

/**
 *
 * @author Thanh Duong
 */
public class QuizResult {

    private int ID;
    private int lessonID;
    private int userID;
    private Date dateSubmit;

    public QuizResult() {
    }

    public QuizResult(int ID, int lessonID, int userID, Date dateSubmit) {
        this.ID = ID;
        this.lessonID = lessonID;
        this.userID = userID;
        this.dateSubmit = dateSubmit;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getLessonID() {
        return lessonID;
    }

    public void setLessonID(int lessonID) {
        this.lessonID = lessonID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public Date getDateSubmit() {
        return dateSubmit;
    }

    public void setDateSubmit(Date dateSubmit) {
        this.dateSubmit = dateSubmit;
    }
    
    

}
