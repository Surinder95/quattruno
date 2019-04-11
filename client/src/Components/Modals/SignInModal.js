import React from 'react';

const SignInModal = () => {
  return (
    <div className="modal" id="SignInModal" data-backdrop="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="text-center text-primary centerMe"> Sign Up </h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="CSUN Email"/><br/>
                  <input type="text" className="form-control" placeholder="First Name"/><br/>
                  <input type="text" className="form-control" placeholder="Last Name"/><br/>
                  <input type="text" className="form-control" placeholder="Password"/><br/>
                  <input type="text" className="form-control" placeholder="Confirm Password"/><br/>
                </div>
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
