namespace DataManagement.Infrastructure.Models;

/// <summary>
/// Предмет.
/// </summary>
public class SubjectDal
{
    /// <summary>
    /// Идентификатор.
    /// </summary>
    public int Id { get; set; }
    
    /// <summary>
    /// Учитель.
    /// </summary>
    public int TeacherId { get; set; }
    public TeacherDal Teacher { get; }
    
    /// <summary>
    /// Наименование.
    /// </summary>
    public string Name { get; set; }
    
    /// <summary>
    /// Протяженности.
    /// </summary>
    public List<LessonDurationDal> Durations { get; set; }
    public List<int> DurationsIds { get; set; }
    
    /// <summary>
    /// Уроки.
    /// </summary>
    public List<LessonDal> Lessons { get; set; }
    public List<int> LessonsIds { get; set; }
}