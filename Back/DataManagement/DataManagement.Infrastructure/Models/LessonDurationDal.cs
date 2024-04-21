namespace DataManagement.Infrastructure.Models;

/// <summary>
/// Время уроока.
/// </summary>
public class LessonDurationDal
{
    /// <summary>
    /// Индентификаитор.
    /// </summary>
    public int Id { get; set; }
    
    /// <summary>
    /// Время урока в минутах.
    /// </summary>
    public int Duration { get; set; }
    
    /// <summary>
    /// FK - уроки.
    /// </summary>
    public List<LessonDal> Lessons { get; set; }
    public List<int> LessonsIds { get; set; }
    
    /// <summary>
    /// Предметы.
    /// </summary>
    public List<SubjectDal> Subjects { get; set; }
    public List<int> SubjectsIds { get; set; }
}