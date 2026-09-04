function Avatar({ src, alt, className }) {
  return (
    <img src={src} alt={alt} className={`rounded-full w-16 h-16 w-14 h-14 ${className}`} />
  );
}
export default Avatar;