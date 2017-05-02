Template.layout.onCreated(function () {
    this.activeTab = new ReactiveVar('home');
});

Template.layout.helpers({
    getActiveClass: function (tab) {
        var activeTab = Template.instance().activeTab.get();
        if(tab===activeTab) return 'active';
    }
});

Template.layout.events({
    'click .selectedTab':function(e,template){
        console.log("aa");
        var currentTab=$(e.target).closest('.selectedTab').attr('data-tab');        
        template.activeTab.set(currentTab);
    }
});