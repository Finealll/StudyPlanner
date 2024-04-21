namespace DataManagement.Infrastructure.Models;

/// <summary>
/// Интервал между уроками
/// </summary>
public class BreakIntervalDal
{
    /// <summary>
    /// Индентификаитор.
    /// </summary>
    public int Id { get; set; }
    
    /// <summary>
    /// Время перерыва в минутах.
    /// </summary>
    public int Minutes { get; set; }
    
    /// <summary>
    /// Учителя.
    /// </summary>
    public List<TeacherDal> Teachers { get; set; }
    public List<int> TeachersIds { get; set; }
}