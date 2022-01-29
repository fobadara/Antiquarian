const Progress = () => {
  const chaptersCompleted = Math.round(25 * (Math.round(Math.random() * 50) / 100));
  return (
    <div id="progress">
      <div className="med-font" style={{ opacity: 0.4 }}>CURRENT CHAPTER</div>
      <div className="med-font" style={{ margin: '1em 0' }}>
        Chapter
        {' '}
        {chaptersCompleted}
      </div>
      <button className="blue-btn" type="submit">
        Update Progress
      </button>
    </div>
  );
};

export default Progress;
