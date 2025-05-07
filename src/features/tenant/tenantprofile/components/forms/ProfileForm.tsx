const ProfileForm = () => {
    return (
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">Profile Form</h3>
        <input type="text" placeholder="Name" className="border rounded p-2 mb-2 w-full" />
        <input type="email" placeholder="Email" className="border rounded p-2 mb-2 w-full" />
        <button className="bg-blue-500 text-white rounded p-2">Save</button>
      </div>
    );
  };
  
  export default ProfileForm;