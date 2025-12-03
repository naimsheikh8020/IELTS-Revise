import React, { useState, useEffect, useRef } from 'react';
import { Mic, Upload, Award, MessageSquare, BookOpen, Volume2, FileText, RotateCcw, Download } from 'lucide-react';

// Mock AI Avatar
const AIAvatarPlaceholder = () => (
  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
    <MessageSquare className="w-12 h-12 text-white" />
  </div>
);

// Result Page Component
const ResultPage = ({ onTakeAnotherTest, onViewDetailedFeedback, onCompareWithPrevious, onDownloadReport }) => {
  const mockResult = {
    overallScore: 7.5,
    performanceBreakdown: [
      { name: 'Fluency', score: 7.5, icon: MessageSquare },
      { name: 'Pronunciation', score: 8, icon: Volume2 },
      { name: 'Grammar', score: 7, icon: BookOpen },
      { name: 'Vocabulary', score: 7.5, icon: FileText }
    ]
  };

  return (
    <div className="w-full h-full bg-white p-4 md:p-6">
      <div className="w-full max-w-full">
        {/* Header */}
        <div className="text-center mb-5">
          <p className="text-[13px] text-gray-500 mb-2">AI-Powered Test Mode</p>
          <h1 className="text-[18px] md:text-[20px] font-semibold text-gray-900">
            Well done! Here's your evaluation.
          </h1>
        </div>

        {/* Overall Score Card */}
        <div className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-xl p-5 md:p-6 mb-4 shadow-lg">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-white text-[14px] md:text-[16px] font-semibold mb-0.5 md:mb-1 leading-tight">
                  Overall IELTS Band Score
                </h2>
                <p className="text-blue-100 text-[12px] md:text-[13px] leading-tight">
                  Based on your speaking performance
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-[24px] md:text-[28px] font-bold text-[#2563EB]">
                {mockResult.overallScore}
              </span>
            </div>
          </div>
        </div>

        {/* Performance Breakdown */}
        <div className="bg-white rounded-xl p-5 md:p-6 mb-4 shadow-sm border border-gray-100">
          <h3 className="text-[14px] md:text-[15px] font-semibold text-gray-900 mb-4 md:mb-5">
            Performance Breakdown
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {mockResult.performanceBreakdown.map((item, index) => {
              const Icon = item.icon;
              const percentage = (item.score / 9) * 100;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-gray-600" strokeWidth={2.5} />
                      <span className="text-[13px] text-gray-700 font-medium">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[14px] md:text-[15px] font-semibold text-gray-900">
                      {item.score}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#2563EB] rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Primary Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={onViewDetailedFeedback}
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-4 py-2.5 md:py-3 rounded-lg text-[13px] font-medium transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" strokeWidth={2.5} />
              <span className="truncate">View Detailed Feedback</span>
            </button>
            
            <button
              onClick={onCompareWithPrevious}
              className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2.5 md:py-3 rounded-lg text-[13px] font-medium transition-all shadow-sm border border-gray-300 flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" strokeWidth={2.5} />
              <span className="truncate">Compare with Previous Tests</span>
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={onTakeAnotherTest}
              className="bg-[#06B6D4] hover:bg-[#0891B2] text-white px-4 py-2.5 md:py-3 rounded-lg text-[13px] font-medium transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" strokeWidth={2.5} />
              <span className="truncate">Take Another Practice Test</span>
            </button>
            
            <button
              onClick={onDownloadReport}
              className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2.5 md:py-3 rounded-lg text-[13px] font-medium transition-all shadow-sm border border-gray-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" strokeWidth={2.5} />
              <span className="truncate">Download Report</span>
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-5 text-center">
          <p className="text-[11px] md:text-[12px] text-gray-500 px-2">
            This evaluation is generated by AI and provides an estimate of your speaking performance.
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Speaking Component
const SpeakingRightSide = () => {
  const [stage, setStage] = useState('initial');
  const [currentPart, setCurrentPart] = useState(1);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudios, setRecordedAudios] = useState([]);
  const [showResult, setShowResult] = useState(false);
  
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const simulateAISpeaking = () => {
    setIsAISpeaking(true);
    setStage('aiSpeaking');
    
    setTimeout(() => {
      setIsAISpeaking(false);
      setStage('waitingForUser');
    }, 3000);
  };

  const handleStartTest = () => {
    setShowResult(false);
    simulateAISpeaking();
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setRecordedAudios(prev => [...prev, {
          part: currentPart,
          audio: audioBlob,
          url: URL.createObjectURL(audioBlob)
        }]);
        
        if (currentPart < 3) {
          setStage('nextPart');
        } else {
          setStage('result');
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setStage('userRecording');

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleNextPart = () => {
    setCurrentPart(prev => prev + 1);
    simulateAISpeaking();
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleTakeAnotherTest = () => {
    setShowResult(false);
    setStage('initial');
    setCurrentPart(1);
    setRecordedAudios([]);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('audio/')) {
      const audioUrl = URL.createObjectURL(file);
      setRecordedAudios(prev => [...prev, {
        part: currentPart,
        audio: file,
        url: audioUrl
      }]);
      alert('Audio file uploaded!');
    } else {
      alert('Please upload a valid audio file.');
    }
  };

  // Show result page when user clicks "Show Result"
  if (showResult) {
    return (
      <ResultPage
        onTakeAnotherTest={handleTakeAnotherTest}
        onViewDetailedFeedback={() => alert('Detailed feedback coming soon!')}
        onCompareWithPrevious={() => alert('Compare feature coming soon!')}
        onDownloadReport={() => alert('Download report coming soon!')}
      />
    );
  }

  return (
    <div className="w-full h-full bg-white p-4">
      <div className="w-full max-w-full">
        {/* Top Section - Always Visible */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mb-4">
          <div className="flex items-start gap-3 mb-2.5">
            <div className="w-6 h-6 bg-[#2563EB] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mic className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className="text-[15px] font-semibold text-gray-900 leading-tight">
                Speaking Practice (AI Test Mode)
              </h3>
            </div>
          </div>
          <p className="text-[13px] text-gray-600 leading-relaxed pl-9">
            Record your answers as if you're in a real IELTS test. The AI examiner will ask questions, listen, and give instant feedback.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
          {/* AI Avatar Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <div className="w-[100px] mb-5 h-[100px] md:w-[110px] md:h-[110px]">
                <AIAvatarPlaceholder />
              </div>
              {isAISpeaking && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-0.5 bg-[#2563EB] rounded-full animate-wave"
                      style={{
                        height: '20px',
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <h4 className="text-[15px] mt-3 font-semibold text-gray-900 mb-1">
              IELTS AI Examiner
            </h4>
            <p className="text-[13px] text-gray-500">
              AI-Powered Test Mode
            </p>
          </div>

          {/* Dynamic Content Area */}
          <div className="mb-6 min-h-[180px] flex items-center justify-center">
            {stage === 'initial' && (
              <div className="text-center w-full">
                <p className="text-[13px] text-gray-700 leading-relaxed mb-5 px-2 max-w-md mx-auto">
                  Hello! I'm your IELTS AI Speaking Examiner. Let's start the speaking test. Remember to speak clearly and naturally.
                </p>
                <button
                  onClick={handleStartTest}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-md text-[13px] font-medium transition-all shadow-sm"
                >
                  Start Speaking Test
                </button>
              </div>
            )}

            {stage === 'aiSpeaking' && (
              <div className="text-center w-full">
                <p className="text-[13px] text-gray-700 leading-relaxed px-2 max-w-md mx-auto">
                  Hello! I'm your IELTS AI Speaking Examiner. Let's start the speaking test. Remember to speak clearly and naturally.
                </p>
              </div>
            )}

            {stage === 'waitingForUser' && (
              <div className="w-full max-w-md mx-auto">
                <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-md p-3">
                  <div className="flex items-center justify-center gap-2 text-[#1E40AF]">
                    <Mic className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-[13px] font-medium">
                      Now it's your turn. Click "Start Recording" and answer:
                    </p>
                  </div>
                </div>
              </div>
            )}

            {stage === 'userRecording' && (
              <div className="flex flex-col items-center w-full">
                <div className="w-[72px] h-[72px] bg-[#EF4444] rounded-full flex items-center justify-center mb-3 shadow-lg animate-pulse">
                  <Mic className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[#DC2626] font-medium text-[13px] mb-1">
                  Recording in progress...
                </p>
                <p className="text-[13px] text-gray-600 mb-4">
                  Speak clearly and naturally
                </p>
                
                <div className="flex items-center justify-center gap-0.5 h-12 mb-5">
                  {[12, 18, 24, 16, 28, 20, 32, 24, 20, 28, 16, 24, 18, 20, 26, 18, 24, 16, 22, 14].map((height, i) => (
                    <div
                      key={i}
                      className="w-[3px] bg-[#EF4444] rounded-full animate-wave"
                      style={{
                        height: `${height}px`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={handleStopRecording}
                  className="border border-[#EF4444] text-[#EF4444] hover:bg-[#FEF2F2] px-5 py-2.5 rounded-md text-[13px] font-medium transition-all flex items-center gap-2"
                >
                  <div className="w-3 h-3 bg-[#EF4444] rounded-sm" />
                  Stop Recording
                </button>
              </div>
            )}

            {stage === 'nextPart' && (
              <div className="text-center w-full">
                <p className="text-[13px] text-gray-700 leading-relaxed mb-5 px-2 max-w-md mx-auto">
                  Great job! Let's move to the next part. Remember to speak clearly and naturally.
                </p>
                <button
                  onClick={handleNextPart}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-md text-[13px] font-medium transition-all shadow-sm inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="8" cy="8" r="2.5" fill="currentColor"/>
                  </svg>
                  Next Start Questions Part {currentPart + 1}
                </button>
              </div>
            )}

            {stage === 'result' && (
              <div className="text-center w-full">
                <p className="text-[13px] text-gray-700 leading-relaxed mb-5 px-2 max-w-md mx-auto">
                  Excellent work! You've completed all parts of the speaking test. Click below to see your results.
                </p>
                <button
                  onClick={handleShowResult}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-md text-[13px] font-medium transition-all shadow-sm inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Show Result
                </button>
              </div>
            )}
          </div>

          {/* Bottom Controls Section */}
          <div className="border-t border-gray-100 pt-5 mt-5">
            <div className="flex items-center gap-2 mb-4">
              <Mic className="w-[18px] h-[18px] text-gray-600" strokeWidth={2.5} />
              <p className="text-[13px] font-medium text-gray-700">Recording Controls</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={stage === 'waitingForUser' ? handleStartRecording : undefined}
                disabled={stage !== 'waitingForUser'}
                className={`${
                  stage === 'waitingForUser'
                    ? 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                } px-5 py-2.5 rounded-md text-[13px] font-medium transition-all flex items-center gap-2 shadow-sm`}
              >
                <Mic className="w-4 h-4" strokeWidth={2.5} />
                Start Recording
              </button>
              
              <label className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-2.5 rounded-md text-[13px] font-medium transition-all flex items-center gap-2 cursor-pointer">
                <Upload className="w-4 h-4" strokeWidth={2.5} />
                Upload File
                <input 
                  type="file" 
                  accept="audio/*" 
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Recorded Audio Playback Section */}
          {recordedAudios.length > 0 && (
            <div className="border-t border-gray-100 pt-5 mt-5">
              <div className="flex items-center gap-2 mb-4">
                <Volume2 className="w-[18px] h-[18px] text-gray-600" strokeWidth={2.5} />
                <p className="text-[13px] font-medium text-gray-700">
                  Your Recordings ({recordedAudios.length})
                </p>
              </div>
              
              <div className="space-y-3">
                {recordedAudios.map((recording, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-medium text-gray-700">
                        Part {recording.part} Recording
                      </span>
                      <span className="text-[11px] text-gray-500">
                        Recording {index + 1}
                      </span>
                    </div>
                    <audio 
                      controls 
                      src={recording.url}
                      className="w-full h-10"
                      style={{ outline: 'none' }}
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1.2);
          }
        }
        
        .animate-wave {
          animation: wave 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SpeakingRightSide;