using DataManagement.Domain.Enums;
using DataManagement.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace DataManagement.Infrastructure;

public class ApplicationDbContext: DbContext
{
    public DbSet<UserDal> Users { get; set; }
    public DbSet<BreakIntervalDal> BreakIntervals { get; set; }
    public DbSet<LessonDurationDal> LessonDurations { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresEnum<IntegrationType>();
        
        modelBuilder.Entity<BreakIntervalDal>()
            .HasData(new List<BreakIntervalDal>()
            {
                new BreakIntervalDal(){Id = 1, Minutes = 0},
                new BreakIntervalDal(){Id = 2, Minutes = 5},
                new BreakIntervalDal(){Id = 3, Minutes = 10},
                new BreakIntervalDal(){Id = 4, Minutes = 15},
                new BreakIntervalDal(){Id = 5, Minutes = 20},
                new BreakIntervalDal(){Id = 6, Minutes = 30},
                new BreakIntervalDal(){Id = 6, Minutes = 60},
            });
        
        modelBuilder.Entity<LessonDurationDal>()
            .HasData(new List<LessonDurationDal>()
            {
                new LessonDurationDal(){Id = 4, Duration = 15},
                new LessonDurationDal(){Id = 5, Duration = 30},
                new LessonDurationDal(){Id = 6, Duration = 45},
                new LessonDurationDal(){Id = 6, Duration = 60},
                new LessonDurationDal(){Id = 6, Duration = 75},
                new LessonDurationDal(){Id = 6, Duration = 90},
                new LessonDurationDal(){Id = 6, Duration = 120},
            });

        modelBuilder.Entity<UserDal>()
            .HasOne(x => x.Teacher)
            .WithOne(x => x.User)
            .HasForeignKey<TeacherDal>(e => e.UserId);

        modelBuilder.Entity<UserDal>()
            .HasOne(x => x.Student)
            .WithOne(x => x.User)
            .HasForeignKey<StudentDal>(e => e.UserId);

        modelBuilder.Entity<TeacherDal>()
            .HasMany(x => x.BreakIntervals)
            .WithMany(x => x.Teachers);

        modelBuilder.Entity<LessonDal>()
            .HasOne(x => x.Subject)
            .WithMany(x => x.Lessons)
            .HasForeignKey(x => x.SubjectId);

        modelBuilder.Entity<SubjectDal>()
            .HasOne(x => x.Teacher)
            .WithMany(x => x.Subjects)
            .HasForeignKey(x => x.TeacherId);

        modelBuilder.Entity<TeacherDal>()
            .HasMany(x => x.Students)
            .WithMany(x => x.Teachers);

        modelBuilder.Entity<TeacherCodeDal>()
            .HasOne(x => x.Teacher)
            .WithMany(x => x.TeacherCodes)
            .HasForeignKey(x => x.TeacherId);
        
        base.OnModelCreating(modelBuilder);
    }
}