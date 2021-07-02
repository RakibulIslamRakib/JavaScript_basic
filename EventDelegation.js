<script>
    function SomeDeleteRowFunction() {
      var td = event.target.parentNode; 
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
    }
    </script>

    <table>
       <tr>
           <td><input type="button" value="Delete Row" onclick="SomeDeleteRowFunction()"></td>
       </tr>
       <tr>
           <td><input type="button" value="Delete Row" onclick="SomeDeleteRowFunction()"></td>
       </tr>
       <tr>
           <td><input type="button" value="Delete Row" onclick="SomeDeleteRowFunction()"></td>
       </tr>
    </table>
