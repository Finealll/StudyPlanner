using System.ComponentModel.DataAnnotations.Schema;

namespace DataManagement.Infrastructure.Models;

/// <summary>
/// Преподаватель.
/// </summary>
public class TeacherDal
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
    /// График.
    /// </summary>
    [Column(TypeName = "jsonb")]
    public string Schedule { get; set; }
    
    /// <summary>
    /// Протяженности.
    /// </summary>
    public List<BreakIntervalDal> BreakIntervals { get; set; }
    public List<int> BreakIntervalsIds { get; set; }
    
    /// <summary>
    /// Предметы.
    /// </summary>
    public List<SubjectDal> Subjects { get; set; }
    public List<int> SubjectsIds { get; set; }
    
    /// <summary>
    /// Студенты.
    /// </summary>
    public List<StudentDal> Students { get; set; }
    public List<int> StudentsIds { get; set; }
    
    /// <summary>
    /// Коды преподавателя.
    /// </summary>
    public List<TeacherCodeDal> TeacherCodes { get; set; }
    public List<int> TeacherCodesIds { get; set; }
}
