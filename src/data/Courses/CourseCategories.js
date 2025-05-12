// src/components/Courses/CourseCategories.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCategories.scss';

// Digital marketing specific categories based on your PDF courses
const marketingCategories = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    description: 'Master search, shopping, and performance max campaigns',
    icon: '🔍', // You can replace with actual icons if desired
    count: 3 // This should match the number of Google Ads courses
  },
  {
    id: 'social-media-marketing',
    name: 'Social Media Marketing',
    description: 'Learn strategies for Facebook, Instagram, Twitter and Snapchat',
    icon: '📱',
    count: 4 // This should match the number of social media courses
  },
  {
    id: 'video-marketing',
    name: 'Video Marketing',
    description: 'Create effective video ad campaigns for platforms like YouTube',
    icon: '🎬',
    count: 1 // This should match the number of video marketing courses
  }
];

const CourseCategories = () => {
  return (
    <div className="courseCategories mt-8 mb-8">
      <h2 className="text-xl font-bold mb-4">Browse by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {marketingCategories.map(category => (
          <Link 
            to={`/courses/category/${category.id}`} 
            key={category.id}
            className="categoryCard p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <div className="categoryIcon text-3xl mr-3">{category.icon}</div>
              <div>
                <h3 className="font-bold">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
                <p className="text-sm mt-1">{category.count} course{category.count !== 1 ? 's' : ''}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseCategories;

