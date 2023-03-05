function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Actions')
      .addItem('Send Emails', 'sendEmails')
      .addToUi();
}

function sendEmails() {

  var ss = SpreadsheetApp.getActive()
  var name = ss.getName();
  var sheet = ss.getActiveSheet()
  var rangeData = sheet.getDataRange();
  var lastRow = rangeData.getLastRow();
  
  for (var i = 2; i <= lastRow; i++ ) {
    var range = sheet.getRange(i,1);
    var status = range.getValue();
    
    var range = sheet.getRange(i,2);
    var email = range.getValue();
    
    var range = sheet.getRange(i,3);
    var subject = range.getValue();
    
    var range = sheet.getRange(i,4);
    var body = range.getValue();
    
    Logger.log(email);
    Logger.log(subject);
    Logger.log(body);
    
    if (status != EMAIL_SENT) {
      MailApp.sendEmail(email, subject, body);
      SpreadsheetApp.getActiveSheet().getRange(i,1).setValue("EMAIL_SENT");
    }
  }
}
