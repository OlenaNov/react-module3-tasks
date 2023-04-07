export const VideoList = ({ videos, onSelect }) => {
return (
    <ul>
        {videos.map(({ id, link }) => (
            <li key={id} onClick={() => onSelect(link)}>
                {link}
            </li>
        ))}
    </ul>
)
};