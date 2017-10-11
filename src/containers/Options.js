import React from 'react';
import { connect } from 'react-redux';
import logo from '../img/thoughtcrime.svg';
import menuOptions from './options/OptionsMenu';
import { navigateOptions, saveChangesModal, deleteSite, checkDomainPreset }
  from '~/actions/options';
import EditModal from '~/components/EditModal';
import DNDWrapper from '~/helpers/DNDWrapper';

class OptionsApp extends React.Component {
  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onMenuClick(category, page) {
    const { navigateOptions } = this.props;
    return e => {
      e.stopPropagation();
      navigateOptions(category, page);
    };
  }
  componentWillMount() {
    const { checkDomainPreset } = this.props;
    checkDomainPreset();
  }
  render() {
    const { selectedPage, selectedCategory, modalObj, deleteSite, saveChangesModal } = this.props;
    const Content = menuOptions.options[selectedPage];
    return (
      <div id="OptionsApp">
        <div className="container-fluid">
          <div id="EditModalContainer">
            <DNDWrapper>
              <EditModal
                site={modalObj} deleteSite={deleteSite} saveChangesModal={saveChangesModal}
              />
            </DNDWrapper>
          </div>
          <div className="row">
            <div className="col-md-2">
              <img
                src={logo} alt="" className="img-responsive center-block" height="128" width="128"
              />
            </div>
            <div className="col-md-10 offset-md-2">
              <div className="page-header text-center">
                <h1>ThoughtCrime - <small>{selectedPage}</small></h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 sidebar">
              <ul className="nav nav-sidebar nav-pills nav-stacked" id="options-menu">
                {menuOptions.structure.map(cat => {
                  const catActive = (selectedPage === cat.title) ? 'active' : '';
                  const collapse = (cat.title === selectedCategory) ?
                  'nav nav-pills nav-stacked collapse in' : 'nav nav-pills nav-stacked collapse';
                  return (
                    <li
                      key={cat.title} role="presentation" className={catActive}
                    >
                      <a
                        data-toggle="collapse" data-parent="options-menu"
                        onClick={this.onMenuClick(cat.title, cat.title)} href={`#${cat.title}-menu`}
                      >
                        {cat.title}
                      </a>
                      {cat.items &&
                        <ul
                          className={collapse} id={`${cat.title}-menu`}
                        >
                          {cat.items.map(item => {
                            const active = (selectedPage === item) ? 'active' : '';
                            return (
                              <li
                                key={item} role="presentation" className={active}
                                onClick={this.onMenuClick(cat.title, item)}
                              >
                                <a href={`#${item}`}>{item}</a>
                              </li>
                            );
                          })}
                        </ul>
                      }
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-10 main">
              <Content />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state => (
    {
      selectedPage: state.selectedPage,
      selectedCategory: state.selectedCategory,
      navOptions: state.navOptions,
      modalObj: state.Filtering.modalObj
    }
  ),
  dispatch => (
    {
      navigateOptions: (category, page) => dispatch(navigateOptions(category, page)),
      saveChangesModal: site => dispatch(saveChangesModal(site)),
      deleteSite: site => dispatch(deleteSite(site)),
      checkDomainPreset: () => dispatch(checkDomainPreset())
    }
  )
)(OptionsApp);
