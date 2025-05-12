// src/pages/Courses/DirectPDFViewer.js
// A super basic PDF viewer that just uses an iframe to display PDFs
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopNav from '../../components/TopNav/TopNav';
import BottomNav from '../../components/BottomNav/BottomNav';
import coursesData from '../../data/coursesData';
import './CourseViewer.scss';

// Set this to true to bypass subscription checks for testing
const TESTING_MODE = true;

export default function DirectPDFViewer() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { goals } = useSelector((state) => state.subscriber);
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('DirectPDFViewer loading. Course ID:', courseId);
    
    // Find the course from our data
    const foundCourse = coursesData.find(c => c.id === courseId);
    console.log('Found course:', foundCourse);
    
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      setError('Course not found');
    }
    
    setLoading(false);
  }, [courseId]);

  if (loading) {
    return (
      <>
        <TopNav />
        <div className="centerContainer">
          <div className="spinner" role="status">
            <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <BottomNav />
      </>
    );
  }

  if (error) {
    return (
      <>
        <TopNav />
        <div className="centerContainer">
          <div className="Attributes mb-4">
            <p><strong>Error</strong></p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <p className="text-center text-red-500 mb-4">{error}</p>
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/courses')}
                className="bg-[#FFB246] hover:bg-orange-400 text-black font-bold py-2 px-6 rounded-full"
              >
                Back to Courses
              </button>
            </div>
          </div>
        </div>
        <BottomNav />
      </>
    );
  }

  if (!course) {
    return (
      <>
        <TopNav />
        <div className="centerContainer">
          <div className="Attributes mb-4">
            <p><strong>Course Not Found</strong></p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <p className="text-center mb-4">Sorry, the course you're looking for doesn't exist.</p>
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/courses')}
                className="bg-[#FFB246] hover:bg-orange-400 text-black font-bold py-2 px-6 rounded-full"
              >
                Back to Courses
              </button>
            </div>
          </div>
        </div>
        <BottomNav />
      </>
    );
  }

  return (
    <>
      <TopNav />
      <div className="centerContainer">
        {TESTING_MODE && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
            <p className="font-bold">Testing Mode Enabled</p>
            <p>Subscription checks are bypassed. You can view all courses without a subscription.</p>
          </div>
        )}
        
        <div className="Attributes mb-4">
          <p><strong>HOME | COURSES | {course?.title?.toUpperCase()}</strong></p>
        </div>
        
        <div className="courseViewer p-4 border rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">{course?.title}</h1>
          
          {/* Most basic way to display PDFs - iframe */}
          <div className="pdfContainer my-6" style={{ width: '100%', height: '600px' }}>
            <iframe 
              src={course.fullContentPath} 
              title={course.title}
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
              allowFullScreen={true}
            >
              This browser does not support PDFs. Please download the PDF to view it.
            </iframe>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <Link 
              to={`/courses/${courseId}`}
              className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded"
            >
              Back to Course Details
            </Link>
            
            <Link 
              to="/courses"
              className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded"
            >
              All Courses
            </Link>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}