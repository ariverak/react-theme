import React from 'react'

const SocialAccess = (props) =>(
    <div>
    <div className="separator">
        <span className="text">OR</span>
    </div>

    <button type="submit" className="google btn btn-block btn-secondary my-2 mx-auto" aria-label="LOG IN">
        <span>
            <i className="icon-google-plus s-4"></i>
            <span>Log in with Google</span>
        </span>
    </button>

    <button type="submit" className="facebook btn btn-block btn-secondary my-2 mx-auto" aria-label="LOG IN">
        <span>
            <i className="icon-facebook s-4"></i>
            <span>Log in with Facebook</span>
        </span>
    </button>
  </div>
);

export default SocialAccess
