import Profile from '../components/Profile';
import withPlayerActions from '../HOC/withPlayerActions';

const ProfileEnhancer = ({ playerActions, ownerMusics, profile, ...otherProps }) => {
  const onPlayOwnerMusics = () => playerActions.playPlaylist({
    id: profile.id,
    name: profile.name,
    musics: ownerMusics,
    user: {
      id: 'admin-genius',
      name: 'GENIUS ADMIN',
    },
  });
  return (
    <Profile
      onPlayOwnerMusics={onPlayOwnerMusics}
      ownerMusics={ownerMusics}
      profile={profile}
      {...otherProps}
    />
  );
};

export default withPlayerActions(ProfileEnhancer);
