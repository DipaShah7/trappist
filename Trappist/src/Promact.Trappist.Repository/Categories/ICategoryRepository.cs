﻿using Promact.Trappist.DomainModel.Models.Category;
using System.Collections.Generic;

namespace Promact.Trappist.Repository.Categories
{
    public interface ICategoryRepository
    {
        /// <summary>
        /// Get all Categories
        /// </summary>
        /// <returns>Category list</returns>
        IEnumerable<string> GetAllCategories();

        void AddCategory(Category catagory);
        /// <summary>
        /// it will search Id and corresponding category
        /// </summary>
        /// <param name="key">unique key of a table</param>
        /// <returns>if Id match then it will return object</returns>
        Category GetCategoryById(int key);
        /// <summary>
        /// Edit category From Category model
        /// </summary>
        /// <param name="catagory"> Object of class Category</param>
        void CategoryEdit(Category catagory);
    }
}
