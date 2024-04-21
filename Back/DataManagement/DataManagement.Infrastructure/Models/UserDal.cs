using System.ComponentModel.DataAnnotations.Schema;

namespace DataManagement.Infrastructure.Models;

/// <summary>
/// Пользователь.
/// </summary>
public class UserDal
{
    /// <summary>
    /// Идентификатор.
    /// </summary>
    public long Id { get; set; }

    /// <summary>
    /// Учитель.
    /// </summary>
    public TeacherDal Teacher { get; set; }
    public int TeacherId { get; set; }

    /// <summary>
    /// Учитель.
    /// </summary>
    public StudentDal Student { get; set; }
    public int StudentId { get; set; }
}