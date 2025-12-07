
import React, { useState, useRef, useEffect } from 'react';
import { create } from 'zustand';

 const useReadingStore = create((set) => ({
  currentPart: 1,
  answers: {},
  
  setCurrentPart: (part) => set({ currentPart: part }),
  
  setAnswer: (questionNumber, answer) => 
    set((state) => ({
      answers: { ...state.answers, [questionNumber]: answer }
    })),
  
  getCompletedCount: (state) => Object.keys(state.answers).length,
  
  isQuestionAnswered: (state, questionNumber) => 
    state.answers[questionNumber] !== undefined && state.answers[questionNumber] !== '',
}));

export default useReadingStore