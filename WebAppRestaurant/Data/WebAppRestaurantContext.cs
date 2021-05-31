using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAppRestaurant;

namespace WebAppRestaurant.Data
{
    public class WebAppRestaurantContext : DbContext
    {
        public WebAppRestaurantContext(DbContextOptions<WebAppRestaurantContext> options)
            : base(options)
        {
        }
    }
}
