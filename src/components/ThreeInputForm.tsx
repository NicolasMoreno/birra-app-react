import React, {FunctionComponent} from 'react';
import {InputText} from 'primereact/inputtext';

interface InputProps {

}

export const ThreeInputForm: FunctionComponent<InputProps> = ({}) => (
    <div className='content-section p-col-12'>
        <div className="p-grid p-fluid">
          <div className="p-col-12 p-md-4">
              <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                  </span>
                  <InputText placeholder="Username" />
              </div>
          </div>

          <div className="p-col-12 p-md-4">
              <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">$</span>
                  <InputText placeholder="Price" />
                  <span className="p-inputgroup-addon">.00</span>
              </div>
          </div>

          <div className="p-col-12 p-md-4">
              <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">W</span>
                  <InputText placeholder="Website" />
              </div>
          </div>
        </div>
      </div>
)