/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

/**
 *
 * @author Thanh Duong
 */
public class QuestionResult {
    private int quizResultID;
    private int questionID;
    private boolean correct;

    public QuestionResult() {
    }

    public QuestionResult(int quizResultID, int questionID, boolean correct) {
        this.quizResultID = quizResultID;
        this.questionID = questionID;
        this.correct = correct;
    }

    public int getQuizResultID() {
        return quizResultID;
    }

    public void setQuizResultID(int quizResultID) {
        this.quizResultID = quizResultID;
    }

    public int getQuestionID() {
        return questionID;
    }

    public void setQuestionID(int questionID) {
        this.questionID = questionID;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }
    
    
}
