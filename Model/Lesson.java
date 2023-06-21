/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

/**
 *
 * @author Thanh Duong
 */
public class Lesson {
    private int ID;
    private int moocID;
    private String title;
    private int type; 

    public Lesson() {
    }

    public Lesson(int ID, int moocID, String title, int type) {
        this.ID = ID;
        this.moocID = moocID;
        this.title = title;
        this.type = type;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getMoocID() {
        return moocID;
    }

    public void setMoocID(int moocID) {
        this.moocID = moocID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
    
    
    
}
