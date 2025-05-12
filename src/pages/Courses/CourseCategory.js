// src/pages/Courses/CourseCategory.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopNav from '../../components/TopNav/TopNav';
import BottomNav from '../../components/BottomNav/BottomNav';
import coursesData from '../../data/coursesData';
import './Courses.scss';

export default function CourseCategory() {
  const { categoryName } = useParams();
  const { user } = useSelector((state) => state.auth);
  
  // Get all unique categories from the courses data
  const allCategories = [...new Set(coursesData.map(course => course.category))];
  
  // Filter courses by the selected category
  const categoryCoursesData = categoryName ? 
    coursesData.filter(course => course.category.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase()) : 
    coursesData;
  
  return (
    <>
      <TopNav />
      <div className="centerContainer">
        <div className="Attributes mb-4">
          <p><strong>HOME | COURSES | {categoryName ? categoryName.toUpperCase().replace(/-/g, ' ') : 'ALL CATEGORIES'}</strong></p>
        </div>
        
        {/* Category navigation */}
        <div className="categoryNav mb-6 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            <Link 
              to="/courses" 
              className={`whitespace-nowrap px-4 py-2 rounded-full ${!categoryName ? 'bg-[#FFB246] text-black font-bold' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              All Courses
            </Link>
            
            {allCategories.map(category => (
              <Link 
                key={category}
                to={`/courses/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className={`whitespace-nowrap px-4 py-2 rounded-full ${categoryName && category.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase() ? 'bg-[#FFB246] text-black font-bold' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Course listings */}
        <div className="coursesList">
          <h2 className="text-xl font-bold mb-4">
            {categoryName ? `${categoryName.replace(/-/g, ' ')} Courses (${categoryCoursesData.length})` : `All Courses (${categoryCoursesData.length})`}
          </h2>
          
          {categoryCoursesData.length > 0 ? (
            categoryCoursesData.map((course) => (
              <div key={course.id} className="courseCard mb-5 p-4 border rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-3 md:mb-0">
                    <img 
                      src={course.previewImage || '/course-images/default-course.jpg'} 
                      alt={course.title}
                      className="w-full h-auto rounded-md" 
                    />
                  </div>
                  <div className="md:w-3/4 md:pl-4">
                    <h2 className="text-xl font-bold">{course.title}</h2>
                    <p className="text-gray-600 mb-2">{course.category} • {course.difficulty} • {course.duration}</p>
                    <p className="mb-3">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-orange-500">KSh {course.price}</p>
                      <Link 
                        to={`/courses/${course.id}`}
                        className="bg-[#FFB246] hover:bg-orange-400 text-black font-bold py-2 px-4 rounded-full"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center p-8 bg-gray-50 rounded-lg">No courses found in this category.</p>
          )}
        </div>
      </div>
      <BottomNav />
    </>
  );
}