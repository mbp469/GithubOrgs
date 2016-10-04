console.clear();

/* Define API Key */
var me = {
  apiKey: ''
};
/* Define person whose Orgs to get */
var username = 'addyosmani';

/* Send request to Github */
function requestOrgs() {
  $.ajax({
    type: 'GET',
    url: "https://api.github.com/users/addyosmani/orgs?access_token=" + me.apiKey,
    success: function(results) {
      for(var org of results) {
        var newObject = new OrganizationDetails(org);
      }
    },
    error: function(jqXHR, textStatus, error) {
      console.log(jqXHR, textStatus, error);
    }
  });
}

/* Constructor for OrganizationDetails */
function OrganizationDetails(orgObject) {
  this.info = {
    login: orgObject.login,
    id: orgObject.id,
    avatar_url: orgObject.avatar_url
  };
  this.createElements = function() {
    var container = $('<div>').attr('class','avatar-container');
    var avatar = $('<img>').attr('src', this.info.avatar_url).appendTo(container);
    container.appendTo('#orgs-section');
  };
  this.createElements();
}

/* link the action to the button */
$('#load-button').on('click', function(){
  requestOrgs();

});
