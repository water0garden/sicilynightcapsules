$(function() {
    $("#indexTable").tablesorter();
  });

$(function() {
  // hide child rows
  $('.tablesorter-childRow td').hide();

  $(".tablesorter")
    .tablesorter({
      cssChildRow: "tablesorter-childRow"
    });

  // Toggle child row content (td), not hiding the row since we are using rowspan
  // Using delegate because the pager plugin rebuilds the table after each page change
  // "delegate" works in jQuery 1.4.2+; use "live" back to v1.3; for older jQuery - SOL
  $('.tablesorter').delegate('.toggle', 'click' ,function() {

    // use "nextUntil" to toggle multiple child rows
    // toggle table cells instead of the row
    $('.tablesorter-childRow td').hide();
    $(this).closest('tr').nextUntil('tr:not(.tablesorter-childRow)').find('td').toggle();
    // in v2.5.12, the parent row now has the class tablesorter-hasChildRow
    // so you can use this code as well
    // $(this).closest('tr').nextUntil('tr.tablesorter-hasChildRow').find('td').toggle();

    return false;
  });

});
