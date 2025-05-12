// src/pages/Courses/Courses.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopNav from '../../components/TopNav/TopNav';
import BottomNav from '../../components/BottomNav/BottomNav';
import coursesData from '../../data/coursesData';
import './Courses.scss';

export default function Courses() {
  const { user } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get all unique categories for category section
  const categories = [...new Set(coursesData.map(course => course.category))];
  
  // Count courses in each category
  const categoryCounts = {};
  categories.forEach(category => {
    categoryCounts[category] = coursesData.filter(course => course.category === category).length;
  });
  
  // Filter courses based on search query
  const filteredCourses = coursesData.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <>
      <TopNav />
      <div className="centerContainer">
        <div className="Attributes mb-4">
          <p><strong>HOME | COURSES</strong></p>
        </div>
        
        {/* Hero section for digital marketing courses */}
        <div className="coursesHero p-6 mb-6 bg-gray-100 rounded-lg">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Digital Marketing Blueprints</h1>
          <p className="text-lg mb-4">
            Master digital advertising across major platforms with our comprehensive blueprint courses.
            Learn practical strategies that you can implement immediately to grow your business or advance your career.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/JobAlerts" 
              className="bg-[#FFB246] hover:bg-orange-400 text-black font-bold py-2 px-6 rounded-full text-center"
            >
              Subscribe for Access
            </Link>
            <a 
              href="#courses-list" 
              className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded-full text-center"
            >
              Browse Courses
            </a>
          </div>
        </div>
        
        {/* Categories section */}
        <div className="courseCategories mt-8 mb-8">
          <h2 className="text-xl font-bold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map(category => {
              // Determine category icon
              let icon = '📚';
              if (category === 'Google Ads') icon = '🔍';
              if (category === 'Social Media Marketing') icon = '📱';
              if (category === 'Video Marketing') icon = '🎬';
              
              return (
                <Link 
                  to={`/courses/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                  key={category}
                  className="categoryCard p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{icon}</div>
                    <div>
                      <h3 className="font-bold">{category}</h3>
                      <p className="text-sm mt-1">{categoryCounts[category]} course{categoryCounts[category] !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Search bar */}
        <div className="searchBar mb-5">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="shadow appearance-none border rounded-sm w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        {/* Course listings */}
        <div id="courses-list" className="coursesList">
          <h2 className="text-xl font-bold mb-4">All Courses ({coursesData.length})</h2>
          
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
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
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
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
            <p className="text-center py-8">No courses found matching your search. Try a different search term.</p>
          )}
        </div>
      </div>
      <BottomNav />
    </>
  );
}