namespace DataManagement.Infrastructure.Models;

/// <summary>
/// Ученик.
/// </summary>
public class StudentDal
{
    /// <summary>
    /// Идентификатор.
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Идентификатор пользователя.
    /// </summary>
    public int UserId { get; set; }
    public UserDal User { get; set; }
    
    /// <summary>
    /// Преподаватели.
    /// </summary>
    public List<TeacherDal> Teachers { get; set; }
    public List<int> TeachersIds { get; set; }
}